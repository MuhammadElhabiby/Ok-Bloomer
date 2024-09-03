# Ok Bloomer

# How to Docker Windows
1. Docker Desktop runterladen und installieren https://docs.docker.com/desktop/install/windows-install/
2. WSL installieren
    1. Powershell als Admin ausführen
    2. wsl --install ausführen
    3. https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi runterladen und installieren oder über Windows-Update installieren
4. PC neustarten
5. Docker Desktop starten und warten bis Docker Engine gestartet ist (unten links zu sehen, siehe Screenshot)

![image](https://user-images.githubusercontent.com/38724145/206859797-708afca6-44ff-4e46-8341-ee055b536211.png)

6. Konsole im repo öffnen
7. docker compose up --build ausführen
8. Nun werden die Docker Container gebaut und ausgeführt. Nach Änderungen muss der Befehl docker compose up --build erneut ausgeführt werden, um die Änderungen zu übernehmen

Die Docker Instanz kann ebenfalls über Docker Desktop verwaltet werden.


Ports:
- 127.0.0.1:7000 - Dashboard
- 127.0.0.1:7001 - MongoDB
- 127.0.0.1:7002 - MongoDB Admin Panel
- 127.0.0.1:7003 - MQTT Broker


MQTT Debug GUI Tool - https://github.com/thomasnordquist/MQTT-Explorer
https://github.com/thomasnordquist/MQTT-Explorer/releases/tag/v0.3.5
