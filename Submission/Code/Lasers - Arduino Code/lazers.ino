int lazerA;
int lazerB;
int lazerC;
int lazerD;
int lazerE;

void setup() {
  Serial.begin(9600);
}

void loop() {

lazerA = analogRead(0);
lazerB = analogRead(1);
lazerC = analogRead(2);
lazerD = analogRead(3);
lazerE = analogRead(4);




  Serial.print(lazerA);
  Serial.print(",");
  Serial.print(lazerB);
  Serial.print(",");
  Serial.print(lazerC);
  Serial.print(",");
  Serial.print(lazerD);
  Serial.print(",");
  Serial.print(lazerE);

  Serial.println();

delay(200);

}
