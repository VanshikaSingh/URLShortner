import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue, setList, list }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newList, setNewList] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong :(</p>
  }
  console.log('newList', newList)
const newchangeList = () =>{
const newlist = list.concat(shortenLink);
return setNewList(newlist)
}

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p onChange={newchangeList}>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
          
        </div>
        
      )}
    </>
  )
}

export default LinkResult