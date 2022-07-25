export default function Home() {
  return (
    <div className="col-12 col-md-9 mt-3">
      <p>
        These are a series of challenges to practice the fundamentals of using fetch.
      </p>
      <p>
        You can switch between the 6 challenges using the top navbar.
        The challenges cover reading, creating, updating and deleting.
      </p>
      <p>
        Look out for the <code>/**** DON'T CHANGE ANYTHING BELOW ****/</code> comment.
      </p>
      <p>
        Each challenge will ask you to correctly communicate with a fake backend that
        uses json-server.
      </p>
      <p>
        To run the fake backend you will need to:
      </p>
      <ol>
        <li className="mb-3">
          <p>Install json-server (if you do not already have it installed)</p>
          <p className="bg-light p-2 w-50">
            <code>npm install -g json-server</code>
          </p>
        </li>
        <li>
          <p>Start the backend and leave it running while working on challenges</p>
          <p className="bg-light p-2 w-50">
            <code>npm run backend</code>
          </p>
        </li>
      </ol>
      <p>
        Any changes made to the backend WILL persist when you refresh the page. 
      </p>
      <p>
        To reset the backend, open the fake-backend folder and replace the 
        contents of the db.json file with the contents of the BACKUP.json file.
      </p>
    </div>
  )
}