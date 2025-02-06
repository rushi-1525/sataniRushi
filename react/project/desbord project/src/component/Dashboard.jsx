const Dashboard = () => {
    const [bidsList, setBidsList] = useState([]);
    const [filteredBids, setFilteredBids] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();
  
    useEffect(() => {
      setBidsList(bids);
      setFilteredBids(bids);
    }, []);
  
    const handleSearch = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
      if (term) {
        setFilteredBids(bids.filter((bid) =>
          bid.bidNumber.includes(term) || bid.fromCity.includes(term) || bid.toCity.includes(term)
        ));
      } else {
        setFilteredBids(bids);
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      history.push('/login');
    };
  
    return (
      <div>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
        <input
          type="text"
          placeholder="Search bids..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul>
          {filteredBids.map((bid) => (
            <li key={bid.bidNumber}>
              <a href={`/bid/${bid.bidNumber}`}>{bid.bidNumber}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Dashboard;