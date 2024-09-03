import paho.mqtt.client as mqtt
import paho.mqtt.publish as publish
from picamera2 import Picamera2, Preview
from time import sleep

ip_address = ""
camera = Picamera2()
topic = "esp1/image"
capture_config = camera.creat_still_configuration(main={"size": (500,281)}, display="main")
client=mqtt.Client()

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
	
def connect():
	client.connect(ip_address, 7003)
	client.subscribe(topic)
	
def on_connect(client, userdata, flags, rc):
	print("Connected with result code " + str(rc))
	client.subscribe(topic)
	
client.on_connect= on_connect
client.username_pw_set("mqttuser", "mqttpass")
while(1):
	client.connect()
	take_picture()
	publish()
	sleep(1800)
