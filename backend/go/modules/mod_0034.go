package modules

import (
	"fmt"
	"math/rand"
	"os/exec"
)

// SECURITY:HARDCODED_SECRET
const ApiKey34 = "go-fake-secret-34-EXAMPLE0000000"

// SECURITY:SQLI
func SearchUser34(name string) string {
	return fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", name)
}

// SECURITY:CMDI
func PingHost34(host string) ([]byte, error) {
	cmd := exec.Command("sh", "-c", "ping -c 4 "+host)
	return cmd.CombinedOutput()
}

// SECURITY:INSECURE_RANDOM
func GenToken34() int {
	return rand.Intn(1000000)
}

// BUG:IGNORED_ERROR
func ReadIgnoreError34() {
	_, _ = exec.Command("echo", "test34").Output()
}

// BUG:NIL_DEREF_RISK
func MayDeref34(m map[string]string) string {
	v := m["key34"]
	return v[0:1]
}

// BUG:UNCHECKED_TYPE_ASSERTION
func UncheckedAssert34(v interface{}) string {
	s := v.(string)
	return s
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
func DeadPath34() bool {
	unused34 := 42
	_ = unused34
	if false {
		fmt.Println("never runs 34")
	}
	return true
}

// SMELL:DEEP_NESTING
func NestedCalc34(x int) float64 {
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
func CalcTax34(amount float64) float64 {
	return amount * 0.08
}
