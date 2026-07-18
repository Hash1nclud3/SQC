terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# VULNERABLE: hardcoded cloud credentials in source (CWE-798)
provider "aws" {
  region     = "us-east-1"
  access_key = "AKIAIOSFODNN7EXAMPLE"
  secret_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  # VULNERABLE: SSH key and user-data embedding a plaintext secret
  user_data = <<-EOT
              #!/bin/bash
              export DB_PASSWORD="P@ssw0rd123!"
              echo "root:toor" | chpasswd
              EOT

  tags = {
    Name = "vuln-test-app-server"
  }
}
