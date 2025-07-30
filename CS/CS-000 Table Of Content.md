
```dataview

table file.mtime as "最后修改", 
      done as "Done", 
      remark as "Remark"
from "CS"
where file.name != "CS-000 Table Of Content"
sort file.name asc
```
