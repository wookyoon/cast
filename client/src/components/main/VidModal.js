import React, { useRef, useState } from 'react';
import { Button, Modal, Comment, Form, Header } from 'semantic-ui-react';
import HoverVideoPlayer from 'react-hover-video-player';
const path = process.env.PUBLIC_URL;

function VidModal() {
	let [modal, setModal] = useState(false);
	const [open, setOpen] = React.useState(false);
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button>Show Modal</Button>}>
			<Modal.Header>자기소개 제목</Modal.Header>
			<div className='content'>
				<div className='vid'>
					<HoverVideoPlayer
						videoSrc={`${path}/vid/vid0.mp4`}
						controls
						restartOnPaused // The video should restart when it is paused
						muted={false}
						style={{ objectFit: 'contain' }}
						onClick={() => {
							setModal(!modal);
						}}></HoverVideoPlayer>
				</div>
				<div className='description'>
					<Modal.Description>
						<p>남자 20대 학생 여린</p>
					</Modal.Description>
				</div>
				<div className='comment'>
					<Comment.Group>
						<Header as='h3' dividing>
							Comments
						</Header>

						<Comment>
							<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
							<Comment.Content>
								<Comment.Author as='a'>Matt</Comment.Author>
								<Comment.Metadata>
									<div>Today at 5:42PM</div>
								</Comment.Metadata>
								<Comment.Text>How artistic!</Comment.Text>
								<Comment.Actions>
									<Comment.Action>Reply</Comment.Action>
								</Comment.Actions>
							</Comment.Content>
						</Comment>

						<Comment>
							<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
							<Comment.Content>
								<Comment.Author as='a'>Elliot Fu</Comment.Author>
								<Comment.Metadata>
									<div>Yesterday at 12:30AM</div>
								</Comment.Metadata>
								<Comment.Text>
									<p>
										This has been very useful for my research. Thanks as well!
									</p>
								</Comment.Text>
								<Comment.Actions>
									<Comment.Action>Reply</Comment.Action>
								</Comment.Actions>
							</Comment.Content>
							<Comment.Group>
								<Comment>
									<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
									<Comment.Content>
										<Comment.Author as='a'>Jenny Hess</Comment.Author>
										<Comment.Metadata>
											<div>Just now</div>
										</Comment.Metadata>
										<Comment.Text>
											Elliot you are always so right :)
										</Comment.Text>
										<Comment.Actions>
											<Comment.Action>Reply</Comment.Action>
										</Comment.Actions>
									</Comment.Content>
								</Comment>
							</Comment.Group>
						</Comment>

						<Comment>
							<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
							<Comment.Content>
								<Comment.Author as='a'>Joe Henderson</Comment.Author>
								<Comment.Metadata>
									<div>5 days ago</div>
								</Comment.Metadata>
								<Comment.Text>
									Dude, this is awesome. Thanks so much
								</Comment.Text>
								<Comment.Actions>
									<Comment.Action>Reply</Comment.Action>
								</Comment.Actions>
							</Comment.Content>
						</Comment>

						<Form reply>
							<Form.TextArea />
							<Button
								content='Add Reply'
								labelPosition='left'
								icon='edit'
								primary
							/>
						</Form>
					</Comment.Group>
				</div>
			</div>

			<Modal.Actions>
				<Button onClick={() => setOpen(false)}>Cancel</Button>
				<Button onClick={() => setOpen(false)} positive>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default VidModal;
