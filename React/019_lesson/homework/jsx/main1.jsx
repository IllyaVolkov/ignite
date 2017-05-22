 var React = require('react');
 var ReactDOM = require('react-dom');
 var users = [{ name: "Anne Montgomery", gender: "Female" },
        { name: "Annie George", gender: "Female" },
        { name: "Gary Butler", gender: "Male" },
        { name: "Lisa Mendoza", gender: "Female" },
        { name: "Marilyn Henry", gender: "Female" },
        { name: "Johnny Tucker", gender: "Male" },
        { name: "Chris Jacobs", gender: "Male" },
        { name: "Benjamin James", gender: "Male" }];
 var Table = React.createClass({
     render: function () {
         return (<table>
                    <tr>
                        <td>{users[0].name}</td>
                        <td>{users[0].gender}</td>
                    </tr>
                    <tr>
                        <td>{users[1].name}</td>
                        <td>{users[1].gender}</td>
                    </tr>
                    <tr>
                        <td>{users[2].name}</td>
                        <td>{users[2].gender}</td>
                    </tr>
                   <tr>
                        <td>{users[3].name}</td>
                        <td>{users[3].gender}</td>
                   </tr>
                   <tr>
                        <td>{users[4].name}</td>
                        <td>{users[4].gender}</td>
                   </tr>
                   <tr>
                        <td>{users[5].name}</td>
                        <td>{users[5].gender}</td>
                   </tr>
                   <tr>
                        <td>{users[6].name}</td>
                        <td>{users[6].gender}</td>
                   </tr>
                   <tr>
                        <td>{users[7].name}</td>
                        <td>{users[7].gender}</td>
                   </tr>
                    
                </table>)
     }
 });
 var table = document.getElementById("table")
 ReactDOM.render(<Table/>, table);