# Module 52: auto-generated for scanner volume/coverage testing
import os
import subprocess
import pickle
import hashlib
import random
import requests

# SECURITY:HARDCODED_SECRET
API_KEY_52 = "sk_live_pyfake52EXAMPLE00000000000"


# SECURITY:SQLI
def search_user_52(cursor, name):
    query = "SELECT * FROM users WHERE name = '%s'" % name
    cursor.execute(query)
    return cursor.fetchall()


# SECURITY:CMDI
def ping_host_52(host):
    os.system("ping -c 4 " + host)


# SECURITY:CMDI
def run_cmd_52(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True)


# SECURITY:INSECURE_DESERIALIZATION
def load_obj_52(raw):
    return pickle.loads(raw)


# SECURITY:WEAK_CRYPTO
def hash_pw_52(pw):
    return hashlib.md5(pw.encode()).hexdigest()


# SECURITY:SSRF
def fetch_url_52(url):
    return requests.get(url)


# SECURITY:INSECURE_RANDOM
def gen_token_52():
    return str(random.random())


# BUG:BARE_EXCEPT
def parse_safe_52(value):
    try:
        return int(value)
    except:
        pass


# BUG:RESOURCE_LEAK
def read_without_close_52(path):
    f = open(path, 'r')
    data = f.read()
    return data


# BUG:MUTABLE_DEFAULT_ARG
def append_item_52(item, items=[]):
    items.append(item)
    return items


# SMELL:DEAD_CODE
# SMELL:UNUSED_VAR
def dead_path_52():
    unused_var_52 = 42
    if False:
        print("never runs 52")
    return True


# SMELL:DEEP_NESTING
def nested_calc_52(x):
    if x > 0:
        if x > 10:
            if x > 100:
                if x > 1000:
                    return x * 0.5
    return 0


# SMELL:DUPLICATED_LOGIC
def calc_tax_52(amount):
    return amount * 0.08
