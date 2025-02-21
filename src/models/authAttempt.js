import mongoose from 'mongoose';

const authAttemptSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    attemptType: {
        type: String,
        enum: ['password', 'mfa', 'backup_code'],
        required: true
    },
    success: {
        type: Boolean,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const AuthAttempt = mongoose.model('AuthAttempt', authAttemptSchema);
export default AuthAttempt; 