input.onButtonPressed(Button.B, function () {
    sb.transitionServoPosition(sb.servo(SBServo.ServoC), 60, 3, sb.easing(SBEasing.Linear))
    basic.pause(5000)
    sb.transitionServoPosition(sb.servo(SBServo.ServoC), 0, 3, sb.easing(SBEasing.Linear))
    basic.pause(500)
})
sb.setContinuousServoSpeed(sb.servo(SBServo.ServoC), 20)
sb.setServoPosition(sb.servo(SBServo.ServoC), 0)
basic.forever(function () {
	
})
