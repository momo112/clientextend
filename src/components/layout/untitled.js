const onSubmit = async e => {
  const response = await fetch(`${host}/logout`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include'
      });
}

<div className="card">
  <div className="card-body">
    <p className="card-text">Copyright &copy; {new Date().getFullYear()} <strong>WEHPEO</strong></p>
    <Link to="https://www.facebook.com/groups/shopifyentrepreneurs/" className="btn btn-primary btn-sm">Facebook Group</Link>
  </div>
</div>