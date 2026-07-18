# Module 33: auto-generated for scanner volume/coverage testing
import os
import subprocess
import pickle
import hashlib
import random
import requests

# SECURITY:HARDCODED_SECRET
API_KEY_33 = "sk_live_pyfake33EXAMPLE00000000000"


# SECURITY:SQLI
def search_user_33(cursor, name):
    query = "SELECT * FROM users WHERE name = '%s'" % name
    cursor.execute(query)
    return cursor.fetchall()


# SECURITY:CMDI
def ping_host_33(host):
    os.system("ping -c 4 " + host)


# SECURITY:CMDI
def run_cmd_33(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True)


# SECURITY:INSECURE_DESERIALIZATION
def load_obj_33(raw):
    return pickle.loads(raw)


# SECURITY:WEAK_CRYPTO
def hash_pw_33(pw):
    return hashlib.md5(pw.encode()).hexdigest()


# SECURITY:SSRF
def fetch_url_33(url):
    return requests.get(url)


# SECURITY:INSECURE_RANDOM
def gen_token_33():
    return str(random.random())


# BUG:BARE_EXCEPT
def parse_safe_33(value):
    try:
        return int(value)
    except:
        pass


# BUG:RESOURCE_LEAK
def read_without_close_33(path):
    f = open(path, 'r')
    data = f.read()
    return data


# BUG:MUTABLE_DEFAULT_ARG
def append_item_33(item, items=[]):
    items.append(item)
    return items


# SMELL:DEAD_CODE
# SMELL:UNUSED_VAR
def dead_path_33():
    unused_var_33 = 42
    if False:
        print("never runs 33")
    return True


# SMELL:DEEP_NESTING
def nested_calc_33(x):
    if x > 0:
        if x > 10:
            if x > 100:
                if x > 1000:
                    return x * 0.5
    return 0


# SMELL:DUPLICATED_LOGIC
def calc_tax_33(amount):
    return amount * 0.08
