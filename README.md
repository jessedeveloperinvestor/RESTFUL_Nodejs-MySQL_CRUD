npm install --save express mysql<br>
npm install --save-dev nodemon<br>
Type in MySQL:<br>
	create database crud;<br>
	use crud;<br>
Then type in MySQL the content of table.sql<br>
Type in MySQL the following command to see the table:<br>
	desc product;<br>
	OR TYPE THIS OTHER ONE:<br>
	select * from product;<br>
<br><br>
Finally, type in the cmd:<br>
npm start<br><br>
GET: http//localhost:3000/product/read<br>
POST: http//localhost:3000/product/create<br>
UPDATE: http//localhost:3000/product/update/ID<br>
DELETE: http//localhost:3000/product/delete/ID