package modules

import (
	"fmt"
	"math/rand"
	"os/exec"
)

// SECURITY:HARDCODED_SECRET
const ApiKey54 = "go-fake-secret-54-EXAMPLE0000000"

// SECURITY:SQLI
func SearchUser54(name string) string {
	return fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", name)
}

// SECURITY:CMDI
func PingHost54(host string) ([]byte, error) {
	cmd := exec.Command("sh", "-c", "ping -c 4 "+host)
	return cmd.CombinedOutput()
}

// SECURITY:INSECURE_RANDOM
func GenToken54() int {
	return rand.Intn(1000000)
}

// BUG:IGNORED_ERROR
func ReadIgnoreError54() {
	_, _ = exec.Command("echo", "test54").Output()
}

// BUG:NIL_DEREF_RISK
func MayDeref54(m map[string]string) string {
	v := m["key54"]
	return v[0:1]
}

// BUG:UNCHECKED_TYPE_ASSERTION
func UncheckedAssert54(v interface{}) string {
	s := v.(string)
	return s
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
func DeadPath54() bool {
	unused54 := 42
	_ = unused54
	if false {
		fmt.Println("never runs 54")
	}
	return true
}

// SMELL:DEEP_NESTING
func NestedCalc54(x int) float64 {
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
func CalcTax54(amount float64) float64 {
	return amount * 0.08
}
