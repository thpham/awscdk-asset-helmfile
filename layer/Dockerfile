# base lambda image
FROM public.ecr.aws/lambda/provided:latest

#
# versions
#

ARG HELM_VERSION=3.15.3
ARG HELMFILE_VERSION=0.166.0

USER root
RUN mkdir -p /opt
WORKDIR /tmp

#
# tools
#

RUN dnf update -y \
    && dnf install -y zip unzip wget tar gzip

#
# helm
#

RUN mkdir -p /tmp/helm && wget -qO- https://get.helm.sh/helm-v${HELM_VERSION}-linux-amd64.tar.gz | tar -xvz -C /tmp/helm
RUN mkdir -p /opt/helm && cp /tmp/helm/linux-amd64/helm /opt/helm/helm

#
# helmfile
#

RUN mkdir -p /tmp/helmfile && wget -qO- https://github.com/helmfile/helmfile/releases/download/v${HELMFILE_VERSION}/helmfile_${HELMFILE_VERSION}_linux_amd64.tar.gz | tar -xvz -C /tmp/helmfile
RUN mkdir -p /opt/helmfile && cp /tmp/helmfile/helmfile /opt/helmfile/helmfile

#
# create the bundle
#

RUN cd /opt \
    && zip --symlinks -r ../layer.zip * \
    && echo "/layer.zip is ready" \
    && ls -alh /layer.zip;

WORKDIR /
ENTRYPOINT [ "/bin/bash" ]