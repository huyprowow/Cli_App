# cli app  btl môn hệ quản trị csdl (DBMS) :v lúc báo cáo cô kêu cái này mà là giao diện à xong trừ điểm vỗ tay (ơ :v trường như ....) :v (When she reported this, teacher said this was the interface, then the clapping point was deducted (oh :v school like ....) :v)
## dev:
1 run file BTL_HQT_Nhom5.sql in mssql (sql server)
2. install dependency: ```npm i```
3. setup .env rename .env.example to .env and fill your mssql database info
```
HOST="host"
PORT="port db run"
SERVER_NAME="sever name"
INSTANCE_NAME="in stance server mssql"
DATABASE_NAME="name db in file sql"
USER_NAME="username db"
PASSWORD="password db"
```
4. run
from root folder
```
node . <commands>
btl_hqt <command>
commands can be:
    help: show guide 
    show: show data 
    add: insert data
    procedure: using procedure 
    view: using view 
    function: using function
    transaction: using Explicit transaction or transaction width lock already written

```
## 2 production:

install cli ```npm install -g .```
uninstall ```npm uninstall -g hello-cli```
use:
```
btl_hqt <command>
commands can be:
    help: show guide 
    show: show data 
    add: insert data
    procedure: using procedure 
    view: using view 
    function: using function
    transaction: using Explicit transaction or transaction width lock already written
```
