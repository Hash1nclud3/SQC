# VULNERABLE: publicly readable/writable S3 bucket, no encryption, no versioning, no logging
resource "aws_s3_bucket" "data_bucket" {
  bucket = "vuln-test-company-data-bucket"
}

resource "aws_s3_bucket_acl" "data_bucket_acl" {
  bucket = aws_s3_bucket.data_bucket.id
  acl    = "public-read-write"
}

resource "aws_s3_bucket_public_access_block" "data_bucket_pab" {
  bucket = aws_s3_bucket.data_bucket.id

  # VULNERABLE: all public access block protections disabled
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
