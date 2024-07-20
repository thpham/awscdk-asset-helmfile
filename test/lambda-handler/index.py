import subprocess

def handler(event, context):
  subprocess.check_call(["/opt/helm/helm", "version"])
  subprocess.check_call(["/opt/helmfile/helmfile", "version"])
  return
