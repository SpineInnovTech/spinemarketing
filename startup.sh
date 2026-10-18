#!/bin/sh
# Revive the corporate site preview. Idempotent and non-blocking.
if curl -sf -o /dev/null --max-time 1 http://127.0.0.1:8080/; then
  exit 0
fi
cd /workspace
npm run dev > /tmp/dev-server.log 2>&1 &
exit 0
