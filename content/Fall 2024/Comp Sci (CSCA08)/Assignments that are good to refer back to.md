https://q.utoronto.ca/courses/362212/pages/worksheets?module_item_id=5909297
- [arithmetic_operators_worksheet.pdf](https://q.utoronto.ca/courses/362212/files/32723538?wrap=1 "arithmetic_operators_worksheet.pdf")
- [builtins_worksheet.pdf](https://q.utoronto.ca/courses/362212/files/32723539?wrap=1 "builtins_worksheet.pdf")
- [variables_memory_model_worksheet.pdf](https://q.utoronto.ca/courses/362212/files/32723540?wrap=1 "variables_memory_model_worksheet.pdf")
- [variables_assignment_worksheet.pdf](https://q.utoronto.ca/courses/362212/files/32723541?wrap=1 "variables_assignment_worksheet.pdf")


### Week 2
- https://q.utoronto.ca/courses/362212/files/32723747?wrap=1
```python
def calculate_total (bill: float, tax_rate: float) -> float:
	""" Returns the total amount paid based on a bill with a certain tax_rate.
	Precondition: bill >= 0.0
				0.0 <= tax_rate <= 1.0
				
	>>> calculate_total(2.0, 0.13)
	2.26
	>>> calculate_total(0.0, 0.13)
	0.0
	>>> calculate_total(2.0, 1.0)
	4.0
	"""
	return bill * (1 + tax_rate)
```


- https://q.utoronto.ca/courses/362212/files/32723746?wrap=1

```python
def format_name(first_name: str, last_name: str) -> str:
	"""
	Returns a first name first_name and last name last_name with the format "last_name, first_name"
	
	>>> format_name("John", "Doe")
	Doe, John
	"""
	return last_name + ", " + first_name
```

```python
def to_listing(last_name: str, first_name: str, phone_number: str) -> str:
	"""
	Returns a persons first name first_name, last name last_name, and phone number phone_number formatted as "last_name, first_name: phone_number" 
	"""
	return format_name(first_name, last_name) + ": " + phone_number
```


- https://q.utoronto.ca/courses/362212/files/32723748?wrap=1
- https://q.utoronto.ca/courses/362212/files/32723749?wrap=1