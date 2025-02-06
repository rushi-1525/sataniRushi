const ResponseForm = ({ match }) => {
    const bid = bids.find(bid => bid.bidNumber === match.params.bidNumber);
    const [response, setResponse] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Response submitted for bid ${bid.bidNumber}`);
    };
  
    return (
      <div>
        <h2>Submit Response</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  