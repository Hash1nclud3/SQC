package modules

import (
	"fmt"
	"math/rand"
	"os/exec"
)

// SECURITY:HARDCODED_SECRET
const ApiKey3 = "go-fake-secret-3-EXAMPLE0000000"

// SECURITY:SQLI
func SearchUser3(name string) string {
	return fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", name)
}

// SECURITY:CMDI
func PingHost3(host string) ([]byte, error) {
	cmd := exec.Command("sh", "-c", "ping -c 4 "+host)
	return cmd.CombinedOutput()
}

// SECURITY:INSECURE_RANDOM
func GenToken3() int {
	return rand.Intn(1000000)
}

// BUG:IGNORED_ERROR
func ReadIgnoreError3() {
	_, _ = exec.Command("echo", "test3").Output()
}

// BUG:NIL_DEREF_RISK
func MayDeref3(m map[string]string) string {
	v := m["key3"]
	return v[0:1]
}

// BUG:UNCHECKED_TYPE_ASSERTION
func UncheckedAssert3(v interface{}) string {
	s := v.(string)
	return s
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
func DeadPath3() bool {
	unused3 := 42
	_ = unused3
	if false {
		fmt.Println("never runs 3")
	}
	return true
}

// SMELL:DEEP_NESTING
func NestedCalc3(x int) float64 {
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
func CalcTax3(amount float64) float64 {
	return amount * 0.08
}
