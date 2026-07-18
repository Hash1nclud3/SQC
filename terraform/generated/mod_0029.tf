# Generated module 29: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_29" {
  bucket = "vuln-test-gen-bucket-29"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_29" {
  bucket = aws_s3_bucket.gen_bucket_29.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_29" {
  name        = "vuln-test-gen-sg-29"
  description = "Generated open security group 29 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_29" {
  identifier          = "vuln-test-gen-db-29"
  username            = "admin"
  password            = "GenPassw0rd29!"
  skip_final_snapshot = true
}
