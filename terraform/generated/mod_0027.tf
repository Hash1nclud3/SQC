# Generated module 27: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_27" {
  bucket = "vuln-test-gen-bucket-27"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_27" {
  bucket = aws_s3_bucket.gen_bucket_27.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_27" {
  name        = "vuln-test-gen-sg-27"
  description = "Generated open security group 27 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_27" {
  identifier          = "vuln-test-gen-db-27"
  username            = "admin"
  password            = "GenPassw0rd27!"
  skip_final_snapshot = true
}
