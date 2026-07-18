# Generated module 3: for IaC misconfiguration scanning volume

# SECURITY:IAC_PUBLIC_S3
resource "aws_s3_bucket" "gen_bucket_3" {
  bucket = "vuln-test-gen-bucket-3"
}

resource "aws_s3_bucket_acl" "gen_bucket_acl_3" {
  bucket = aws_s3_bucket.gen_bucket_3.id
  acl    = "public-read-write"
}

# SECURITY:IAC_OPEN_SG
resource "aws_security_group" "gen_sg_3" {
  name        = "vuln-test-gen-sg-3"
  description = "Generated open security group 3 (INSECURE - for scanner testing only)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# SECURITY:HARDCODED_SECRET
resource "aws_db_instance" "gen_db_3" {
  identifier          = "vuln-test-gen-db-3"
  username            = "admin"
  password            = "GenPassw0rd3!"
  skip_final_snapshot = true
}
