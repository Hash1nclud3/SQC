package modules

import (
	"fmt"
	"math/rand"
	"os/exec"
)

// SECURITY:HARDCODED_SECRET
const ApiKey69 = "go-fake-secret-69-EXAMPLE0000000"

// SECURITY:SQLI
func SearchUser69(name string) string {
	return fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", name)
}

// SECURITY:CMDI
func PingHost69(host string) ([]byte, error) {
	cmd := exec.Command("sh", "-c", "ping -c 4 "+host)
	return cmd.CombinedOutput()
}

// SECURITY:INSECURE_RANDOM
func GenToken69() int {
	return rand.Intn(1000000)
}

// BUG:IGNORED_ERROR
func ReadIgnoreError69() {
	_, _ = exec.Command("echo", "test69").Output()
}

// BUG:NIL_DEREF_RISK
func MayDeref69(m map[string]string) string {
	v := m["key69"]
	return v[0:1]
}

// BUG:UNCHECKED_TYPE_ASSERTION
func UncheckedAssert69(v interface{}) string {
	s := v.(string)
	return s
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
func DeadPath69() bool {
	unused69 := 42
	_ = unused69
	if false {
		fmt.Println("never runs 69")
	}
	return true
}

// SMELL:DEEP_NESTING
func NestedCalc69(x int) float64 {
	if x > 0 {
		if x > 10 {
			if x > 100 {
				if x > 1000 {
					return float64(x) * 0.5
				}
			}
		}
	}
	return 0
}

// SMELL:DUPLICATED_LOGIC
func CalcTax69(amount float64) float64 {
	return amount * 0.08
}
