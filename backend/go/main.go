package main

import (
	"database/sql"
	"fmt"
	"math/rand"
	"net/http"
	"os/exec"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

// VULNERABLE: hardcoded credentials (CWE-798)
const dbPassword = "P@ssw0rd123!"
const apiSecretKey = "go-service-secret-key-EXAMPLE12345"

func searchUser(db *sql.DB, name string) (*sql.Rows, error) {
	// VULNERABLE: SQL Injection via fmt.Sprintf string building (CWE-89)
	query := fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", name)
	return db.Query(query)
}

func pingHandler(c *gin.Context) {
	host := c.Query("host")
	// VULNERABLE: command injection via exec of unsanitized input (CWE-78)
	cmd := exec.Command("sh", "-c", "ping -c 4 "+host)
	output, err := cmd.CombinedOutput()
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}
	c.String(http.StatusOK, string(output))
}

// VULNERABLE: weak/predictable random number generation used for token (CWE-338)
func generateToken() string {
	return fmt.Sprintf("%d", rand.Intn(1000000))
}

func userHandler(c *gin.Context) {
	db, _ := sql.Open("sqlite3", "./app.db")
	name := c.Query("name")
	rows, err := searchUser(db, name)
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}
	defer rows.Close()
	c.String(http.StatusOK, "ok")
}

// Code smell: deeply nested conditionals and duplicated logic
func calculateDiscount(total float64) float64 {
	var discount float64
	if total > 0 {
		if total > 1000 {
			if total > 5000 {
				discount = total * 0.2
			} else {
				discount = total * 0.15
			}
		} else {
			if total > 500 {
				discount = total * 0.1
			} else {
				discount = 0
			}
		}
	}
	return discount
}

// Code smell: unused function, dead code
func unusedHelper() bool {
	x := 10
	y := 20
	_ = x
	_ = y
	if false {
		fmt.Println("dead branch")
	}
	return true
}

func main() {
	r := gin.Default()
	r.GET("/api/users", userHandler)
	r.GET("/api/ping", pingHandler)
	fmt.Println("Starting server with db password:", dbPassword)
	r.Run(":8080")
}
