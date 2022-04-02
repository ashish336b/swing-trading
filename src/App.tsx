import { Button, Card, Form, Table } from "react-bootstrap";
import { TopNav } from "./component/Navbar";

function App(): JSX.Element {
  return (
    <>
      <TopNav />
      <div className="container-fluid mt-3 mx-2">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Card className="p-2">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ticker Symbol</Form.Label>
                    <Form.Control type="text" placeholder="Enter Ticker Symbol" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="stockAmount">
                    <Form.Label>Stock Amount</Form.Label>
                    <Form.Control type="number" placeholder="Stock Amount" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Add Stock
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-8">
            <div className="mx-2">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Ticker Symbol</th>
                    <th>Stock Amount($)</th>
                    <th>Profit(%)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SBN</td>
                    <td>100</td>
                    <td>10%</td>
                    <td>
                      <button className="btn-warning btn btn-sm text-dark">Close Position</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
