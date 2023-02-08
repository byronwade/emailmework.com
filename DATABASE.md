# Collection: "Admin Users"
admin_id (Primary Key)
name
email
password
created_at (timestamp)

# Collection: "Contractor Companies"
company_id (Primary Key)
name
email
password
created_at (timestamp)
company_license_number
address
phone_number
profile_picture
company_website
jobs_posted (array of job_id)
score (relevance score for the job recommendations)

# Collection: "Clients"
client_id (Primary Key)
name
email
password
created_at (timestamp)
jobs_accepted (array of job_id)
phone_number
profile_picture
location (address or GPS coordinates)
preferred_services (array of job categories that the client is interested in)
preferred_location (address or GPS coordinates for job location)

# Collection: "Jobs"
job_id (Primary Key)
title
description
posted_by (company_id of contractor company)
accepted_by (client_id of client)
budget (price for the job)
location (address or GPS coordinates of job site)
start_time (timestamp of when the job is scheduled to start)
end_time (timestamp of when the job is scheduled to end)
status (e.g. "open", "accepted", "completed", etc.)
attachments (array of job-related attachments such as images, PDFs, etc.)
equipment_required (array of required equipment for the job)
created_at (timestamp of when the job was posted)
updated_at (timestamp of when the job was last updated)
category (category of the job such as plumbing, electrical, etc.)

# Collection: "Job Scores"
score_id (Primary Key)
job_id (Foreign Key to Jobs)
client_id (Foreign Key to Clients)
score (numeric value indicating the relevance of the job to the client)
created_at (timestamp of when the score was calculated)

Note: The "Job Scores" collection can be updated by the algorithm every time a job is viewed or applied for by a client. The score can be calculated based on factors such as job location, budget, equipment required, client's past job history, etc. The highest scoring jobs can then be displayed to the client for better job relevance.

# Collection: "Notifications"
notification_id (Primary Key)
recipient_id (Foreign Key referencing either Contractor Companies or Clients collection)
sender_id (Foreign Key referencing either Contractor Companies or Clients collection)
message
timestamp

# Collection: "Ratings & Reviews"
review_id (Primary Key)
reviewer_id (client_id or company_id of the person leaving the review)
reviewed_id (client_id or company_id of the person being reviewed)
rating (number out of 5, or similar)
review_text
created_at (timestamp)

# Collection: "Orders"
order_id (Primary Key)
client_id (Foreign Key referencing the "Clients" collection)
job_id (Foreign Key referencing the "Jobs" collection)
amount
payment_method (e.g. credit card, PayPal, etc.)
created_at (timestamp of when the order was placed)

# Collection: "Payments"
payment_id (Primary Key)
order_id (Foreign Key referencing the "Orders" collection)
client_id (Foreign Key referencing the "Clients" collection)
company_id (Foreign Key referencing the "Contractor Companies" collection)
job_id (Foreign Key referencing the "Jobs" collection)
amount
payment_method (credit card, PayPal, etc.)
created_at (timestamp)
status (e.g. "pending", "completed", "failed")
created_at: A timestamp of when the payment was made.
status: The status of the payment, such as "pending", "completed", or "failed".