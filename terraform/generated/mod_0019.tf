# Generated module 19: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_19" {
  bucket = "vuln-test-gen-bucket-19"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_19" {
  bucket = aws_s3_bucket.gen_bucket_19.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_19" {
  name        = "vuln-test-gen-sg-19"
  description = "Generated open security group 19 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_19" {
  identifier          = "vuln-test-gen-db-19"
  username            = "admin"
  password            = "GenPassw0rd19!"
  skip_final_snapshot = true
}
