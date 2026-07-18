# Generated module 8: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_8" {
  bucket = "vuln-test-gen-bucket-8"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_8" {
  bucket = aws_s3_bucket.gen_bucket_8.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_8" {
  name        = "vuln-test-gen-sg-8"
  description = "Generated open security group 8 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_8" {
  identifier          = "vuln-test-gen-db-8"
  username            = "admin"
  password            = "GenPassw0rd8!"
  skip_final_snapshot = true
}
