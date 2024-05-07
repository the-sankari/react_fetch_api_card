/* eslint-disable react/prop-types */
function Cards({ title, userId, body, number }) {
  return (
    <>
      <div className="card">
        <div className="card-header">{userId}</div>
        <div className="card-body">
          <h4 className="card-title">{title} </h4>
          <p className="card-text"> {body} </p>
        </div>
        <div className="card-footer text-muted">Card: {number}</div>
      </div>
    </>
  );
}

export default Cards;
