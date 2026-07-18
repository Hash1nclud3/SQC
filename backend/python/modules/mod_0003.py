# Module 3: auto-generated for scanner volume/coverage testing
import os
import subprocess
import pickle
import hashlib
import random
import requests

# SECURITY:HARDCODED_SECRET
API_KEY_3 = "sk_live_pyfake3EXAMPLE00000000000"


# SECURITY:SQLI
def search_user_3(cursor, name):
    query = "SELECT * FROM users WHERE name = '%s'" % name
    cursor.execute(query)
    return cursor.fetchall()


# SECURITY:CMDI
def ping_host_3(host):
    os.system("ping -c 4 " + host)


# SECURITY:CMDI
def run_cmd_3(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True)


# SECURITY:INSECURE_DESERIALIZATION
def load_obj_3(raw):
    return pickle.loads(raw)


# SECURITY:WEAK_CRYPTO
def hash_pw_3(pw):
    return hashlib.md5(pw.encode()).hexdigest()


# SECURITY:SSRF
def fetch_url_3(url):
    return requests.get(url)


# SECURITY:INSECURE_RANDOM
def gen_token_3():
    return str(random.random())


# BUG:BARE_EXCEPT
def parse_safe_3(value):
    try:
        return int(value)
    except:
        pass


# BUG:RESOURCE_LEAK
def read_without_close_3(path):
    f = open(path, 'r')
    data = f.read()
    return data


# BUG:MUTABLE_DEFAULT_ARG
def append_item_3(item, items=[]):
    items.append(item)
    return items


# SMELL:DEAD_CODE
# SMELL:UNUSED_VAR
def dead_path_3():
    unused_var_3 = 42
    if False:
        print("never runs 3")
    return True


# SMELL:DEEP_NESTING
def nested_calc_3(x):
    if x > 0:
        if x > 10:
            if x > 100:
                if x > 1000:
                    return x * 0.5
    return 0


# SMELL:DUPLICATED_LOGIC
def calc_tax_3(amount):
    return amount * 0.08
