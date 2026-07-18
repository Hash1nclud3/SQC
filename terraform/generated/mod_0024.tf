# Generated module 24: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_24" {
  bucket = "vuln-test-gen-bucket-24"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_24" {
  bucket = aws_s3_bucket.gen_bucket_24.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_24" {
  name        = "vuln-test-gen-sg-24"
  description = "Generated open security group 24 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_24" {
  identifier          = "vuln-test-gen-db-24"
  username            = "admin"
  password            = "GenPassw0rd24!"
  skip_final_snapshot = true
}
