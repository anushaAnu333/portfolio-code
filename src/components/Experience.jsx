import { useState, React } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import dsc from '../media/DSC.png';
import scr from '../media/SCR.png';
import gotg from '../media/big.png';
import rfp from '../media/RFP.png';
import tcd from '../media/expedia.png';
import ca from '../media/homedepot.png';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCss3Alt,
	faDocker,
	faHtml5,
	faJs,
	faReact,
	faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

const Experience = ({ darkMode }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div data-theme={darkMode ? 'dark' : 'light'}>
			<br></br>
			<Fade>
				<Container className="p">
					<br></br>
					<h2 className="lead" align="center">
						<b>------------------------------Projects------------------------------</b>
					</h2>
					<br></br>
					<Zoom>
						<Row>
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											
												<div className="flip-card-front">
													<Card.Img variant="top" src={tcd} />
													<Card.Body>
														<Card.Title align="center">
														Expedia.com(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
															A website used to book airlines tickets, hotel reservations, car rental, cruise ships and vacation packages.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												
											
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://project-expedia-masai.vercel.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/anushaAnu333/EXPEDIA-CLONE"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
							
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											
												<div className="flip-card-front">
													<Card.Img variant="top" src={ca} />
													<Card.Body>
														<Card.Title align="center">
														Home Depot (Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
															The client side of The Home Depot.com. Here users can browse products and add them to their cart and can buy them.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												
											
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://frabjous-empanada-4054d6.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/anushaAnu333/Home-Depot-clone"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
						</Row>
					</Zoom>
					<br></br>
					<Zoom>
						<Row>
						
						</Row>
					</Zoom>
				</Container>
			</Fade>
			<br></br>
			<hr></hr>
			<br></br>
		</div>
	);
};

export default Experience;
