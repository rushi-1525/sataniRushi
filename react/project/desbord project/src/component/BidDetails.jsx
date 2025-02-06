const BidDetails = ({ match }) => {
    const bid = bids.find(bid => bid.bidNumber === match.params.bidNumber);
  
    if (!bid) {
      return <div>Bid not found</div>;
    }
  
    return (
      <div>
        <h2>Bid Details</h2>
        <p>Bid Number: {bid.bidNumber}</p>
        <p>Start Date: {bid.startDate}</p>
        <p>From City: {bid.fromCity}</p>
        <p>To City: {bid.toCity}</p>
        <p>Vehicle Type: {bid.vehicleType}</p>
        <p>Material Weight: {bid.materialWeight} Kg</p>
      </div>
    );
  };