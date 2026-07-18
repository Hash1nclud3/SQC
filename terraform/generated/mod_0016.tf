# Generated module 16: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_16" {
  bucket = "vuln-test-gen-bucket-16"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_16" {
  bucket = aws_s3_bucket.gen_bucket_16.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_16" {
  name        = "vuln-test-gen-sg-16"
  description = "Generated open security group 16 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_16" {
  identifier          = "vuln-test-gen-db-16"
  username            = "admin"
  password            = "GenPassw0rd16!"
  skip_final_snapshot = true
}
