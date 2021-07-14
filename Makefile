.PHONY: build
build:
	docker-compose up

.PHONY: table
table:
	aws dynamodb create-table \
        --table-name Users \
        --attribute-definitions AttributeName=UserId,AttributeType=S \
        --key-schema AttributeName=UserId,KeyType=HASH \
        --billing-mode PAY_PER_REQUEST \
        --endpoint-url http://localhost:8000

.PHONY: cred
cred:
	aws configure set aws_access_key_id dummy --endpoint-url http:localhost:8000 --profile mfa-sample \
    && aws configure set aws_secret_access_key dummy --endpoint-url http:localhost:8000 --profile mfa-sample