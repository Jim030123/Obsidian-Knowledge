When given a data set, we first load it and begin looking at its structure and content. The simplest way of looking at a data set is to look at and subset specific rows and columns.

[[Load First Data Set.py]]
``` python
import pandas

# by default read_csv() will read a comma separated file,
# our gapminde datta set is separated by a tab
# we can use the sep parameter and indicate a tab with \t

df = pandas.read_csv('./data/gapminder.tsv', sep='\t')

# print out the data

print(df)
```

![[Pasted image 20250720174911.png]]

Check type() function is handy when begin working with many different types of python object
```python
print(type(df))
```
![[Pasted image 20250720175000.png]]

Shape attribute returns a tuple where the first values is the number of rows and the second value is the number of columns
```python
print(df.shape)
```
![[Pasted image 20250720175139.png]]


Since .shape is an attribute of the DataFrame object, and not a function or method of the DataFrame object, it does not have round parentheses after the period.
```python
# shape is an attribute, not a method
# this will cause an error

print(df.shape())
```
![[Pasted image 20250720175229.png]]

