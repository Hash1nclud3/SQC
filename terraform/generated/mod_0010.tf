# Generated module 10: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_10" {
  bucket = "vuln-test-gen-bucket-10"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_10" {
  bucket = aws_s3_bucket.gen_bucket_10.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_10" {
  name        = "vuln-test-gen-sg-10"
  description = "Generated open security group 10 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_10" {
  identifier          = "vuln-test-gen-db-10"
  username            = "admin"
  password            = "GenPassw0rd10!"
  skip_final_snapshot = true
}
