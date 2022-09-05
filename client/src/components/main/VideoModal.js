import React, { useRef, useState } from 'react';
import { Button, Modal, Comment, Form, Header } from 'semantic-ui-react';
import HoverVideoPlayer from 'react-hover-video-player';
import ContentStore from '../../store/ContentStore';
import { observer } from 'mobx-react';

const path = process.env.PUBLIC_URL;

function VideoModal() {
	return (
		<Modal
			onClose={() => ContentStore.setModal(false)}
			onOpen={() => ContentStore.setModal(true)}
			open={ContentStore.open}
			>
			<Modal.Header>{ContentStore.video.title}</Modal.Header>
			<div className='content'>
				<div className='vid'>
					<HoverVideoPlayer
						videoSrc={ContentStore.video.videoUrl}
						controls
						restartOnPaused // The video should restart when it is paused
						muted={false}
						style={{ objectFit: 'contain' }}
						></HoverVideoPlayer>
				</div>
				<div className='description'>
					<Modal.Description>
                    {/* <p >{ContentStore.video.tag}</p> */}
					{ContentStore.video.tag.map((tag, i)=>(
                    <p key={i} >#{tag}</p>
                ))} 
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
				<Button onClick={() => ContentStore.setModal(false)}>Cancel</Button>
				<Button onClick={() => ContentStore.setModal(false)} positive>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default observer(VideoModal);
