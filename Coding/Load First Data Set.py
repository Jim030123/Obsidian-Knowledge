import pandas

# by default read_csv() will read a comma separated file,
# our gapminde datta set is separated by a tab
# we can use the sep parameter and indicate a tab with \t

df = pandas.read_csv('./data/gapminder.tsv', sep='\t')

# print out the data
print(df)