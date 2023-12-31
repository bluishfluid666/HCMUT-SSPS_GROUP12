import { ColumnDef } from '@tanstack/react-table';
import React, { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from 'reactstrap';

//Import Breadcrumb
import TableContainer from 'Components/Common/TableContainer';
import { purchases as defaultPurchase } from 'data';
import useTitle from 'hooks/useTitle';
import { Purchase } from 'types';

import Breadcrumbs from '../../Components/Common/Breadcrumb';

const BuyPage = () => {
  useTitle('Buy Printing Page', {
    restoreOnUnmount: true,
  });

  const [quantity, setQuantity] = useState<number>(0);
  const [purchases, setPurchases] = useState<Purchase[]>(defaultPurchase);
  const [confirmModal, setConfirmModal] = useState(false);

  const columns = useMemo<ColumnDef<Purchase, any>[]>(
    () => [
      {
        header: 'Purchase ID',
        accessorKey: 'id',
        enableColumnFilter: false,
        enableGlobalFilter: false,
        cell: (cellProps) => {
          return <div>{cellProps.getValue()}</div>;
        },
      },
      {
        header: 'Purchased Page Balance',
        accessorKey: 'amount',
        enableColumnFilter: false,
        enableGlobalFilter: false,
        cell: (cellProps) => {
          const q = cellProps.getValue() as number;
          return <div>{!isNaN(q) && (q * 1000).toLocaleString('en-US')} VND</div>;
        },
      },
      {
        header: 'Purchase time',
        accessorKey: 'createdAt',
        enableColumnFilter: false,
        enableGlobalFilter: false,
        cell: (cellProps) => {
          return <div>{new Date(cellProps.getValue() as string).toLocaleString('en-US')}</div>;
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Modal isOpen={confirmModal} toggle={() => setConfirmModal(false)} centered={true}>
        <div className='modal-content'>
          <ModalBody className='px-4 py-5 text-center'>
            <button
              type='button'
              onClick={() => setConfirmModal(false)}
              className='btn-close position-absolute end-0 top-0 m-3'
            ></button>
            <div className='avatar-sm mb-4 mx-auto'>
              <div className='avatar-title bg-success text-success bg-opacity-10 font-size-20 rounded-3'>
                <i className='mdi mdi-shopping'></i>
              </div>
            </div>
            <p className='text-muted font-size-16 mb-4'>Are you sure you want to buy</p>

            <div className='hstack gap-2 justify-content-center mb-0'>
              <button
                type='button'
                className='btn btn-success'
                onClick={() => {
                  if (isNaN(quantity) || quantity <= 0) return;

                  toast.success('Purchase success');
                  setPurchases([
                    ...purchases,
                    {
                      id: (parseInt(purchases[purchases.length - 1].id, 10) + 1).toString(),
                      amount: quantity,
                      createdAt: Date.now(),
                    },
                  ]);
                  setConfirmModal(false);
                }}
              >
                Buy Now
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setConfirmModal(false)}
              >
                Close
              </button>
            </div>
          </ModalBody>
        </div>
      </Modal>
      <div className='page-content'>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title='For Students' breadcrumbItem='Buy Printing Page' />

          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <CardTitle>Page balance</CardTitle>
                  <h1 className='font-weight-bold'>
                    <b>15</b>
                  </h1>
                  <p className='m-0'>Pages</p>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <CardTitle className='ml-4'>Purchase information</CardTitle>
                  <CardSubtitle className='ml-4'>
                    You will then be redirected to BKPay to complete your purchase
                  </CardSubtitle>

                  <Row className='mt-4'>
                    <Label htmlFor='horizontal-firstname-Input' className='col-sm-3 col-form-label'>
                      Quantity (number of A4-size pages)
                    </Label>
                    <Col sm={9}>
                      <Input
                        type='number'
                        className='form-control'
                        id='horizontal-firstname-Input'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.valueAsNumber)}
                      />
                    </Col>
                  </Row>
                  <Row className='mt-4'>
                    <Label htmlFor='horizontal-firstname-Input' className='col-sm-3 col-form-label'>
                      Rate
                    </Label>
                    <Col sm={9}>1.000 VND/page</Col>
                  </Row>
                  <Row className='mt-4'>
                    <Label htmlFor='horizontal-firstname-Input' className='col-sm-3 col-form-label'>
                      Total
                    </Label>
                    <Col sm={9}>
                      {!isNaN(quantity) && (quantity * 1000).toLocaleString('en-US')} VND
                    </Col>
                    <Col
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                      }}
                      xs={12}
                    >
                      <Button
                        type='button'
                        color='success'
                        className='btn-sm btn-rounded'
                        style={{
                          width: 100,
                        }}
                        disabled={isNaN(quantity) || quantity <= 0}
                        onClick={() => setConfirmModal(true)}
                      >
                        Purchase
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <CardTitle className='ml-4'>Purchase history</CardTitle>
                  <TableContainer
                    columns={columns}
                    tableClass='table align-middle table-nowrap'
                    theadClass=''
                    data={purchases}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BuyPage;
