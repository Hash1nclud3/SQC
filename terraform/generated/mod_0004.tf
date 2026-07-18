# Generated module 4: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_4" {
  bucket = "vuln-test-gen-bucket-4"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_4" {
  bucket = aws_s3_bucket.gen_bucket_4.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_4" {
  name        = "vuln-test-gen-sg-4"
  description = "Generated open security group 4 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_4" {
  identifier          = "vuln-test-gen-db-4"
  username            = "admin"
  password            = "GenPassw0rd4!"
  skip_final_snapshot = true
}
