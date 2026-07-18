package modules

import (
	"fmt"
	"math/rand"
	"os/exec"
)

// SECURITY:HARDCODED_SECRET
const ApiKey60 = "go-fake-secret-60-EXAMPLE0000000"

// SECURITY:SQLI
func SearchUser60(name string) string {
	return fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", name)
}

// SECURITY:CMDI
func PingHost60(host string) ([]byte, error) {
	cmd := exec.Command("sh", "-c", "ping -c 4 "+host)
	return cmd.CombinedOutput()
}

// SECURITY:INSECURE_RANDOM
func GenToken60() int {
	return rand.Intn(1000000)
}

// BUG:IGNORED_ERROR
func ReadIgnoreError60() {
	_, _ = exec.Command("echo", "test60").Output()
}

// BUG:NIL_DEREF_RISK
func MayDeref60(m map[string]string) string {
	v := m["key60"]
	return v[0:1]
}

// BUG:UNCHECKED_TYPE_ASSERTION
func UncheckedAssert60(v interface{}) string {
	s := v.(string)
	return s
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
func DeadPath60() bool {
	unused60 := 42
	_ = unused60
	if false {
		fmt.Println("never runs 60")
	}
	return true
}

// SMELL:DEEP_NESTING
func NestedCalc60(x int) float64 {
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
func CalcTax60(amount float64) float64 {
	return amount * 0.08
}
