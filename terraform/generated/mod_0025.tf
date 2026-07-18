# Generated module 25: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_25" {
  bucket = "vuln-test-gen-bucket-25"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_25" {
  bucket = aws_s3_bucket.gen_bucket_25.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_25" {
  name        = "vuln-test-gen-sg-25"
  description = "Generated open security group 25 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_25" {
  identifier          = "vuln-test-gen-db-25"
  username            = "admin"
  password            = "GenPassw0rd25!"
  skip_final_snapshot = true
}
