import os
import sqlite3
import subprocess
import pickle
import hashlib
import yaml
from flask import Flask, request, jsonify
from xml.etree import ElementTree

app = Flask(__name__)

# VULNERABLE: hardcoded secret key (CWE-798)
app.config['SECRET_KEY'] = 'dev-secret-key-please-change-1234567890'
DB_PASSWORD = "P@ssw0rd123!"
API_TOKEN = "sk_live_EXAMPLEFAKETOKEN0000000000000000"

# VULNERABLE: debug mode enabled in what looks like production code (CWE-489)
app.config['DEBUG'] = True


def get_db_connection():
    conn = sqlite3.connect('app.db')
    return conn


@app.route('/api/users')
def get_user():
    # VULNERABLE: SQL Injection via string formatting (CWE-89)
    username = request.args.get('username')
    conn = get_db_connection()
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE username = '%s'" % username
    cursor.execute(query)
    result = cursor.fetchall()
    return jsonify(result)


@app.route('/api/ping')
def ping():
    # VULNERABLE: OS command injection via os.system (CWE-78)
    host = request.args.get('host')
    os.system("ping -c 4 " + host)
    return "pinged"


@app.route('/api/run')
def run_command():
    # VULNERABLE: shell=True with unsanitized user input (CWE-78)
    cmd = request.args.get('cmd')
    result = subprocess.run(cmd, shell=True, capture_output=True)
    return result.stdout


@app.route('/api/load-config', methods=['POST'])
def load_config():
    # VULNERABLE: yaml.load without SafeLoader allows arbitrary code execution (CWE-502)
    data = request.data
    config = yaml.load(data, Loader=yaml.Loader)
    return jsonify(config)


@app.route('/api/deserialize', methods=['POST'])
def deserialize():
    # VULNERABLE: insecure deserialization via pickle on untrusted input (CWE-502)
    raw = request.data
    obj = pickle.loads(raw)
    return jsonify({"status": "ok"})


@app.route('/api/parse-xml', methods=['POST'])
def parse_xml():
    # VULNERABLE: XXE - no defusedxml / entity resolution disabled (CWE-611)
    xml_data = request.data
    tree = ElementTree.fromstring(xml_data)
    return jsonify({"root_tag": tree.tag})


@app.route('/api/hash-password', methods=['POST'])
def hash_password_route():
    # VULNERABLE: weak hash algorithm for password storage (CWE-327)
    password = request.form.get('password')
    hashed = hashlib.md5(password.encode()).hexdigest()
    return jsonify({"hash": hashed})


@app.route('/api/read-file')
def read_file():
    # VULNERABLE: path traversal (CWE-22)
    filename = request.args.get('filename')
    with open(os.path.join('/app/data/', filename)) as f:
        content = f.read()
    return content


# ---- BAD CODE QUALITY EXAMPLES ----

def process_data(data):
    # Code smell: deeply nested logic, no early returns, magic numbers everywhere
    result = None
    if data is not None:
        if isinstance(data, dict):
            if 'value' in data:
                if data['value'] is not None:
                    if data['value'] > 0:
                        if data['value'] > 1000:
                            result = data['value'] * 0.15
                        else:
                            if data['value'] > 500:
                                result = data['value'] * 0.10
                            else:
                                result = data['value'] * 0.05
    return result


def unused_and_dead_code_example():
    unused_var_1 = "never referenced"
    unused_var_2 = 12345
    try:
        int("not-a-number")
    except:
        pass  # bare except + swallowed error, bad practice
    if False:
        print("unreachable dead code")
    return True


# Code smell: duplicated logic copy-pasted with minor renames
def calc_discount_a(total):
    return total * 0.1


def calc_discount_b(total):
    return total * 0.1


def calc_discount_c(amount):
    return amount * 0.1


if __name__ == '__main__':
    # VULNERABLE: binding to all interfaces with debug=True (CWE-1188 style exposure)
    app.run(host='0.0.0.0', port=5000, debug=True)
