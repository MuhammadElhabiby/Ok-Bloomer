import paho.mqtt.client as mqtt
from picamera2 import Picamera2, Preview
frome time import sleep

ip_address = ""
topic1 = "update"
topic2 = "esp1/image"
camera=Picamera2()
capture_config = camera.create_still_configuration(main={"size": (500,281)}, display="main")

def take_picture():
	try:
		camera.start(show_preview=False)
		sleep(1)
		camera.switch_mode_and_capture_file(capture_config, 'image_plant.jpg')
		camera.stop()
		pass
	finally:
		pass
		
def publish_image():
	f=open("image_plant.jpg","rb")
	fileContent=f.read()
	byteArr = bytearray(fileContent)
	client.publish(topic,byteArr)
	print("image published")
	
def on_connect(client, userdata, flags, rc):
	print("Connected with result code " + str(rc))
	client.subscribe(topic1)
	client.subscribe(topic2)
	
def on_message(client, userdata, msg):
	print(msg.topic)
	if msg.topic == topic1:
		print("message received")
		take_picture()
		publish_image()

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.username_pw_set("mqttuser", "mqttpass")

client.connect(ip_address,7003)

client.loop_forever()
