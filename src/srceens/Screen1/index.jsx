import React from 'react'
import "./style.css";
export default function right(props) {
  return (

<>
<div className="right">
  <div className="top-section d-flex align-items-center justify-content-end">

    <div className="me-auto">
      <h2>Welcome, {props.account}!</h2>
      <p>Here is your inventory Dashboard today.</p>
    </div>


    <div className="me-3">
      <div className="dropdown">
        <button
  className="btn dropdown-custom dropdown-toggle"
  type="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
 View as: {props.position}
</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>


    <button className="add-btn">+ Add new lot</button>
  </div>
  
<div className="cards">
   <div className=" card card1">
<p>Lots in Cataloguing</p>
<h1>142</h1>
<p className='green'><i class="bi bi-arrow-up"></i>+5.2% this week</p>
   </div>
      <div className="card card2">
        <p>New Arrivals Today</p>
<h1>35</h1>
<p className='red'><i class="bi bi-arrow-up"></i>-1.8% vs yesterday</p>
      </div>
         <div className="card card3">
<p>Awiating Photography</p>
<h1>18</h1>
<p className='green'><i class="bi bi-arrow-up"></i>+10.0% this week</p>

         </div>
</div>



<div className="table">

<div class="table-container">
    <div class="table-header">
      <h2>Recently Added Lots</h2>
    </div>

    <table>
      <thead>
        <tr>
          <th>Lot #</th>
          <th>Item Name</th>
          <th>Date Added</th>
          <th>Status</th>
          <th>Assigned To</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#78543</td>
          <td>Antique Silver Locket</td>
          <td>2023-10-27</td>
          <td>
            <span class="status-badge status-published">
              <span class="status-dot dot-published"></span>
              Published
            </span>
          </td>
          <td>Alex H.</td>
          <td class="text-right"><a href="#" class="view-link">View</a></td>
        </tr>

        <tr>
          <td>#78542</td>
          <td>19th Century Oil Painting</td>
          <td>2023-10-27</td>
          <td>
            <span class="status-badge status-cataloguing">
              <span class="status-dot dot-cataloguing"></span>
              Cataloguing
            </span>
          </td>
          <td>Sarah J.</td>
          <td><a href="#" class="view-link">View</a></td>
        </tr>

        <tr>
          <td>#78541</td>
          <td>Vintage Leather Briefcase</td>
          <td>2023-10-26</td>
          <td>
            <span class="status-badge status-onhold">
              <span class="status-dot dot-onhold"></span>
              On Hold
            </span>
          </td>
          <td>Alex H.</td>
          <td><a href="#" class="view-link">View</a></td>
        </tr>

        <tr>
          <td>#78540</td>
          <td>Set of 4 Porcelain Vases</td>
          <td>2023-10-26</td>
          <td>
            <span class="status-badge status-awaiting">
              <span class="status-dot dot-awaiting"></span>
              Awaiting Photography
            </span>
          </td>
          <td>John D.</td>
          <td><a href="#" class="view-link">View</a></td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

</div>

    </>
  )
}
