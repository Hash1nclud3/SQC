# Module 99: auto-generated for scanner volume/coverage testing
import os
import subprocess
import pickle
import hashlib
import random
import requests

# SECURITY:HARDCODED_SECRET
API_KEY_99 = "sk_live_pyfake99EXAMPLE00000000000"


# SECURITY:SQLI
def search_user_99(cursor, name):
    query = "SELECT * FROM users WHERE name = '%s'" % name
    cursor.execute(query)
    return cursor.fetchall()


# SECURITY:CMDI
def ping_host_99(host):
    os.system("ping -c 4 " + host)


# SECURITY:CMDI
def run_cmd_99(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True)


# SECURITY:INSECURE_DESERIALIZATION
def load_obj_99(raw):
    return pickle.loads(raw)


# SECURITY:WEAK_CRYPTO
def hash_pw_99(pw):
    return hashlib.md5(pw.encode()).hexdigest()


# SECURITY:SSRF
def fetch_url_99(url):
    return requests.get(url)


# SECURITY:INSECURE_RANDOM
def gen_token_99():
    return str(random.random())


# BUG:BARE_EXCEPT
def parse_safe_99(value):
    try:
        return int(value)
    except:
        pass


# BUG:RESOURCE_LEAK
def read_without_close_99(path):
    f = open(path, 'r')
    data = f.read()
    return data


# BUG:MUTABLE_DEFAULT_ARG
def append_item_99(item, items=[]):
    items.append(item)
    return items


# SMELL:DEAD_CODE
# SMELL:UNUSED_VAR
def dead_path_99():
    unused_var_99 = 42
    if False:
        print("never runs 99")
    return True


# SMELL:DEEP_NESTING
def nested_calc_99(x):
    if x > 0:
        if x > 10:
            if x > 100:
                if x > 1000:
                    return x * 0.5
    return 0


# SMELL:DUPLICATED_LOGIC
def calc_tax_99(amount):
    return amount * 0.08
